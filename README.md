# DB 設計

## messages テーブル

| Column   | Type    | Options                       |
| -------- | ------- | ----------------------------- |
| body     | text    | null:false                    |
| image    | string  |                               |
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

## users テーブル

| Column   | Type   | Options    |
| -------- | ------ | ---------- |
| name     | string | null:false |
| e-mail   | string | null:false |
| password | string | null:false |

### Association

- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groups テーブル

| Column | Type   | Options    |
| ------ | ------ | ---------- |
| name   | string | null:false |

### Association

- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groups テーブル

| Column   | Type    | Options                       |
| -------- | ------- | ----------------------------- |
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

## members_groups テーブル

| Column    | Type    | Options                       |
| --------- | ------- | ----------------------------- |
| member_id | integer | null:false, foreign_key: true |
| group_id  | integer | null:false, foreign_key: true |

### Association

- belongs_to :member
- belongs_to :group
