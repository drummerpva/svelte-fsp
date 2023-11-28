<script>
  import { page } from '$app/stores'
  import Logo from './Logo.svelte'
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contato', label: 'Contato' },
    { href: '/faq', label: 'Perguntas Frequentes' },
  ]
</script>

<a href="/">
  <Logo />
</a>
{#each menuItems as { href, label }}
  {#if href === $page.url.pathname}
    <a
      {href}
      class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
      >{label}</a
    >
  {:else}
    <a
      {href}
      class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >{label}</a
    >
  {/if}
{/each}
