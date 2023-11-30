//SSR - Será executado pelo servidor e pelo cliente(ambos)
export const load = async () => {
  return {
    categories: ['Todos', 'Websites', 'Lojas Virtuais', 'Blogs'],
    items: [
      {
        title: 'Item 1',
        category: 'Websites',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        slug: 'item-1',
      },
      {
        title: 'Item 2',
        category: 'Lojas Virtuais',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        slug: 'item-2',
      },
      {
        title: 'Item 3',
        category: 'Websites',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        slug: 'item-3',
      },
      {
        title: 'Item 4',
        category: 'Blogs',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        slug: 'item-4',
      },
      {
        title: 'Item 5',
        category: 'Blogs',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        slug: 'item-5',
      },
    ],
  }
}
