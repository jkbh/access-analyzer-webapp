export type User = {
    id: number;
    name: string;
    groups: string[];
};

export type Role = Set<string>;


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
    const userGroups = new Set(user.groups);
    user.groups.forEach((group) => {
      if (!groupMap.has(group)) {
        groupMap.set(group, userGroups);
      }

      groupMap.get(group)?.intersection(userGroups);
    });
  });
  const uniqueRoles = new Array();
  groupMap.forEach((value, _) => {
    if (!uniqueRoles.some((role) => setEqual(role, value))) {
      uniqueRoles.push(value);
    }
  });

  return uniqueRoles;
}

export const mockUsers: User[] = [
    { id: 1, name: "tanner", groups: ["admin", "user", "productA"] },
    { id: 2, name: "tandy", groups: ["user", "productB"] },
    { id: 3, name: "joe", groups: ["admin", "productC"] },
    { id: 4, name: "alice", groups: ["user", "productD", "productE"] },
    { id: 5, name: "bob", groups: ["admin", "productF"] },
    { id: 6, name: "carol", groups: ["user", "productG", "productH"] },
    { id: 7, name: "dave", groups: ["admin", "productI"] },
    { id: 8, name: "eve", groups: ["user", "productJ", "productA"] },
    { id: 9, name: "frank", groups: ["admin", "productB", "productC"] },
    {
      id: 10,
      name: "grace",
      groups: ["user", "productD", "productE", "productF"],
    },
  ];