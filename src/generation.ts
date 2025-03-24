interface Entity {
  id: string;
  name: string;
  properties?: {
    [key: string]: string | number | Date;
  };
}

export type Group = string;

export type GroupState = "assigned" | "not_assigned" | "assumed";

export interface User extends Entity {
  groupStates: Map<Group, GroupState>;
}

export type Role = Set<Group>;

export function generateUsers(numUsers: number): User[] {
  const groups = [
    "admin",
    "user",
    "git_read",
    "git_write",
    "git_admin",
    "confluence_read",
    "confluence_write",
    "confluence_admin",
    "jira_read",
    "jira_write",
    "jira_admin",
    "bitbucket_read",
    "bitbucket_write",
    "bitbucket_admin",
    "slack_read",
    "slack_write",
    "slack_admin",
    "dropbox_read",
    "dropbox_write",
    "dropbox_admin",
    "onedrive_read",
    "onedrive_write",
    "onedrive_admin",
    "google_drive_read",
    "google_drive_write",
    "google_drive_admin",
    "aws_read",
    "aws_write",
    "aws_admin",
    "azure_read",
    "azure_write",
    "azure_admin",
    "gcp_read",
    "gcp_write",
    "gcp_admin",
    "docker_read",
    "docker_write",
    "docker_admin",
    "kubernetes_read",
    "kubernetes_write",
    "kubernetes_admin",
  ];

  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const user: User = {
      id: i.toString(),
      name: `user${i}`,
      properties: {},
      groupStates: new Map(),
    };

    groups.forEach((group, i) => {
      user.groupStates.set(
        group,
        Math.random() * groups.length > i ? "assigned" : "not_assigned",
      );
    });

    users.push(user);
  }
  return users;
}

/**
 * Determines whether two sets are equal.
 *
 * @template T - The type of elements in the sets.
 * @param {Set<T>} a - The first set to compare.
 * @param {Set<T>} b - The second set to compare.
 * @returns {boolean} - True if the sets are equal, false otherwise.
 */
function setEqual<T>(a: Set<T>, b: Set<T>): boolean {
  return a.size === b.size && a.union(b).size === a.size;
}

/**
 * Calculates all unique roles from the provided user data.
 *
 * @param {User[]} data - An array of user objects.
 * @returns {Array<Role>} An array of unique roles.
 */
export function calculateAllRoles(data: User[]): Array<Role> {
  let groupMap = new Map<string, Role>();
  data.forEach((user) => {
    const userGroups = new Set(
      user.groupStates
        .entries()
        .filter(([_, state]) => state !== "not_assigned")
        .map(([group, _]) => group),
    );
    console.log(userGroups);
    userGroups.forEach((group) => {
      if (groupMap.has(group)) {
        groupMap.set(
          group,
          groupMap.get(group)?.intersection(userGroups) ?? new Set(),
        );
      } else {
        groupMap.set(group, userGroups);
      }
    });
  });

  const uniqueRoles = new Array<Role>();
  groupMap.forEach((value) => {
    if (!uniqueRoles.some((role) => setEqual(role, value))) {
      uniqueRoles.push(value);
    }
  });

  return uniqueRoles;
}
