import { Collection } from '../models/Collection.ts'

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void

  render(): void {
    // clear parent
    this.parent.innerHTML = ''

    const templateElement = document.createElement('template')

    for (let model of this.collection.models) {
      const itemParent = document.createElement('div')

      // create a view and render it inside itemParent
      this.renderItem(model, itemParent)
      templateElement.content.append(itemParent)
    }
    this.parent.append(templateElement.content)
  }
}
