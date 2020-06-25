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
- belongs_to :member

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

## members テーブル

| Column      | Type   | Options    |
| ----------- | ------ | ---------- |
| member_name | string | null:false |

### Association

- has_many :messages
- has_many :messages
- has_many :members_groups
- has_many :groups, through: :members_groups

## groups テーブル

| Column | Type | Options |
|group_name|string | null:false |
| user_id | integer | null:false, foreign_key: true |
|member_id | integer | null:false, foreign_key: true |

### Association

- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :members_groups
- has_many :members, through: :members_groups

## users_groups テーブル

| Column   | Type    | Options                       |
| -------- | ------- | ----------------------------- |
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |
