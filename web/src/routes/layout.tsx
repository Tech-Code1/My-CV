import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="flex flex-col items-center justify-center">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://discord.gg/77guznJ8mZ" target="_blank">
          Made with ❤ by Indie Creators HQ
        </a>
      </footer>
    </>
  );
});
