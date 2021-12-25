<script>
  import SnowIcon from "./components/SnowIcon.svelte"
  import CountDown from "./components/CountDown.svelte"
  import { onDestroy, onMount } from "svelte"
  let animationDuration = Math.floor(Math.random() * 15 + 5) + "s"
  import { generateId } from "./util/index"
  let snows = [
    {
      width: Math.floor(Math.random() * 50) + 10,
      opacity: 0.5,
      left: "1200px",
      animationDuration: "18s",
      id: generateId(),
    },
  ]

  const removeSnow = (id) => {
    snows = snows.filter((item) => item.id !== id)
  }

  let intervalId
  onMount(() => {
    intervalId = setInterval(() => {
      const newSnow = {
        width: Math.floor(Math.random() * 50) + 10,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth + "px",
        animationDuration: Math.floor(Math.random() * 15 + 3) + "s",
        id: generateId(),
      }
      snows = [...snows, newSnow]
    }, 400)
  })

  onDestroy(() => {
    clearInterval(intervalId)
  })
</script>

<main class="root">
  <div class="snowflake" style="--animationDuration: {animationDuration}">
    {#each snows as snow (snow.id)}
      <SnowIcon {snow} onDelete={removeSnow} />
    {/each}
  </div>
  <CountDown />
  <div class="footer">
    Happy new year {new Date().getFullYear() + 1}! 🎅
    <a target="_blank" href="https://github.com/vnylbscr/svelte-happy-new-year">
      Source Code
    </a>
  </div>
</main>

<style>
  .root {
    background-color: var(--main);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .footer {
    position: absolute;
    bottom: 50px;
    color: var(--text-light);
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .footer a {
    display: inline-flex;
    color: aquamarine;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.4s;
  }
  .footer a:hover {
    color: var(--text-light);
  }
</style>
