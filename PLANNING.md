# Planning

A admin tool to build roles from an existing user access configuration

## Requirements

- Load users data
  - json schema?
- Present users and their groups in table
- Dynamic columns
  - Groups
  - User data
- Calculate Roles from data
- Visualize selected roles in table
- Give user a group temporarily, use that to update role calculation
- Mark group as deprecated, ignore these groups in role calculation
- Group user rows by an info column, calculate roles per grouping

The data grid component needs an `AccessData` object:

```ts
type AccessData = {
  groups: Group[];
  users: User[];
};

interface Entity = {
  readonly id: string;
  readonly name: string;
  properties: {
    readonly [key: string]: string | number | Date;
  }
}

type Group = Entity;

interface User extends Entity = {
  readonly groupIds: string[];
  assumedGroups: string[];
};
```
