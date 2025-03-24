export type AccessData = {
  groups: Group[];
  users: User[];
};

interface Entity {
  readonly id: string;
  readonly name: string;
  properties: {
    readonly [key: string]: string | number | Date;
  };
}

export type Group = Entity;

export interface User extends Entity {
  readonly groupIds: string[];
  assumedGroups: string[];
}

export function generateMockData(): AccessData {
  const groups: Group[] = [
    {
      id: "group1",
      name: "Admins",
      properties: {
        createdAt: new Date(),
        description: "Administrators group",
      },
    },
    {
      id: "group2",
      name: "Users",
      properties: { createdAt: new Date(), description: "Regular users group" },
    },
    {
      id: "group3",
      name: "Developers",
      properties: { createdAt: new Date(), description: "Developers group" },
    },
    {
      id: "group4",
      name: "Testers",
      properties: { createdAt: new Date(), description: "Testers group" },
    },
    {
      id: "group5",
      name: "Managers",
      properties: { createdAt: new Date(), description: "Managers group" },
    },
    {
      id: "group6",
      name: "Support",
      properties: { createdAt: new Date(), description: "Support group" },
    },
    {
      id: "group7",
      name: "HR",
      properties: {
        createdAt: new Date(),
        description: "Human Resources group",
      },
    },
    {
      id: "group8",
      name: "Finance",
      properties: { createdAt: new Date(), description: "Finance group" },
    },
    {
      id: "group9",
      name: "Marketing",
      properties: { createdAt: new Date(), description: "Marketing group" },
    },
    {
      id: "group10",
      name: "Sales",
      properties: { createdAt: new Date(), description: "Sales group" },
    },
    {
      id: "group11",
      name: "IT",
      properties: { createdAt: new Date(), description: "IT group" },
    },
    {
      id: "group12",
      name: "Legal",
      properties: { createdAt: new Date(), description: "Legal group" },
    },
    {
      id: "group13",
      name: "Operations",
      properties: { createdAt: new Date(), description: "Operations group" },
    },
    {
      id: "group14",
      name: "Procurement",
      properties: { createdAt: new Date(), description: "Procurement group" },
    },
    {
      id: "group15",
      name: "Logistics",
      properties: { createdAt: new Date(), description: "Logistics group" },
    },
    {
      id: "group16",
      name: "R&D",
      properties: {
        createdAt: new Date(),
        description: "Research and Development group",
      },
    },
    {
      id: "group17",
      name: "Security",
      properties: { createdAt: new Date(), description: "Security group" },
    },
    {
      id: "group18",
      name: "Compliance",
      properties: { createdAt: new Date(), description: "Compliance group" },
    },
    {
      id: "group19",
      name: "Admin Assistants",
      properties: {
        createdAt: new Date(),
        description: "Administrative Assistants group",
      },
    },
    {
      id: "group20",
      name: "Executives",
      properties: { createdAt: new Date(), description: "Executives group" },
    },
  ];

  const users: User[] = [
    {
      id: "user1",
      name: "Alice",
      properties: { email: "alice@example.com", age: 30 },
      groupIds: ["group1", "group2", "group3"],
      assumedGroups: [],
    },
    {
      id: "user2",
      name: "Bob",
      properties: { email: "bob@example.com", age: 25 },
      groupIds: ["group2", "group4", "group5"],
      assumedGroups: [],
    },
    {
      id: "user3",
      name: "Charlie",
      properties: { email: "charlie@example.com", age: 28 },
      groupIds: ["group3", "group6", "group7"],
      assumedGroups: [],
    },
    {
      id: "user4",
      name: "David",
      properties: { email: "david@example.com", age: 35 },
      groupIds: ["group4", "group8", "group9"],
      assumedGroups: [],
    },
    {
      id: "user5",
      name: "Eve",
      properties: { email: "eve@example.com", age: 40 },
      groupIds: ["group5", "group10", "group11"],
      assumedGroups: [],
    },
    {
      id: "user6",
      name: "Frank",
      properties: { email: "frank@example.com", age: 32 },
      groupIds: ["group6", "group12", "group13"],
      assumedGroups: [],
    },
    {
      id: "user7",
      name: "Grace",
      properties: { email: "grace@example.com", age: 29 },
      groupIds: ["group7", "group14", "group15"],
      assumedGroups: [],
    },
    {
      id: "user8",
      name: "Hank",
      properties: { email: "hank@example.com", age: 45 },
      groupIds: ["group8", "group16", "group17"],
      assumedGroups: [],
    },
    {
      id: "user9",
      name: "Ivy",
      properties: { email: "ivy@example.com", age: 27 },
      groupIds: ["group9", "group18", "group19"],
      assumedGroups: [],
    },
    {
      id: "user10",
      name: "Jack",
      properties: { email: "jack@example.com", age: 33 },
      groupIds: ["group10", "group20", "group1"],
      assumedGroups: [],
    },
    {
      id: "user11",
      name: "Karen",
      properties: { email: "karen@example.com", age: 38 },
      groupIds: ["group11", "group2", "group3"],
      assumedGroups: [],
    },
    {
      id: "user12",
      name: "Leo",
      properties: { email: "leo@example.com", age: 41 },
      groupIds: ["group12", "group4", "group5"],
      assumedGroups: [],
    },
    {
      id: "user13",
      name: "Mia",
      properties: { email: "mia@example.com", age: 26 },
      groupIds: ["group13", "group6", "group7"],
      assumedGroups: [],
    },
    {
      id: "user14",
      name: "Nina",
      properties: { email: "nina@example.com", age: 34 },
      groupIds: ["group14", "group8", "group9"],
      assumedGroups: [],
    },
    {
      id: "user15",
      name: "Oscar",
      properties: { email: "oscar@example.com", age: 31 },
      groupIds: ["group15", "group10", "group11"],
      assumedGroups: [],
    },
    {
      id: "user16",
      name: "Paul",
      properties: { email: "paul@example.com", age: 36 },
      groupIds: ["group16", "group12", "group13"],
      assumedGroups: [],
    },
    {
      id: "user17",
      name: "Quinn",
      properties: { email: "quinn@example.com", age: 39 },
      groupIds: ["group17", "group14", "group15"],
      assumedGroups: [],
    },
    {
      id: "user18",
      name: "Rose",
      properties: { email: "rose@example.com", age: 37 },
      groupIds: ["group18", "group16", "group17"],
      assumedGroups: [],
    },
    {
      id: "user19",
      name: "Sam",
      properties: { email: "sam@example.com", age: 42 },
      groupIds: ["group19", "group18", "group19"],
      assumedGroups: [],
    },
    {
      id: "user20",
      name: "Tina",
      properties: { email: "tina@example.com", age: 43 },
      groupIds: ["group20", "group1", "group2"],
      assumedGroups: [],
    },
  ];

  return { groups, users };
}
