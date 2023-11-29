//SSR - Será executado pelo servidor e pelo cliente(ambos)
export const load = async () => {
  return {
    items: [
      {
        title: 'Item 1',
        category: 'Componentes',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      },
      {
        title: 'Item 2',
        category: 'Componentes',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      },
      {
        title: 'Item 3',
        category: 'Componentes',
        image:
          'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      },
    ],
  }
}
