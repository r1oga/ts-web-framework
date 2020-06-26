import { CollectionView } from './CollectionView.ts'
import { UserShow } from './UserShow.ts'
import { User } from '../models/User.ts'
import { UserProps } from '../models/interfaces.ts'

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render()
  }
}
