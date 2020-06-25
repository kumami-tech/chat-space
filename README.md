# DB 設計

## messages テーブル

| Column   | Type    | Options                       |
| -------- | ------- | ----------------------------- |
| body     | text    | null:false                    |
| image    | string  |                               |
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |

## Association

- belongs_to :user
- belongs_to :group
- belongs_to :member
