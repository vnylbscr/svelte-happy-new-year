<script>
  import { onDestroy, onMount } from "svelte"
  import { timeBetweenDates } from "../util/index"

  const newYear = new Date().getFullYear()

  let endYear = new Date(`December 31, ${newYear} 23:59:59`)
  let { seconds, minutes, hours, dates } = timeBetweenDates(endYear)

  let intervalId

  onMount(() => {
    intervalId = setInterval(() => {
      const {
        seconds: fromSec,
        minutes: fromMin,
        hours: fromHour,
        dates: fromDate,
      } = timeBetweenDates(endYear)

      seconds = fromSec
      minutes = fromMin
      hours = fromHour
      dates = fromDate
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(intervalId)
  })
</script>

<div class="countdown">
  <p class="days">
    {dates} Days
  </p>
  <p class="hours">
    {hours} Hours
  </p>
  <p class="minutes">
    {#if minutes < 10}
      0{minutes}
    {:else}
      {minutes}
    {/if}
    minutes
  </p>
  <p class="seconds">
    {#if seconds < 10}
      0{seconds}
    {:else}
      {seconds}
    {/if}
    seconds
  </p>
</div>

<style>
  .countdown {
    font-size: 32px;
    text-align: center;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    border: 1px solid #aaa;
    padding: 12px;
    border-radius: var(--border-main);
    animation: fade 5s linear backwards;
  }
  .countdown p {
    font-size: 24px;
    color: var(--text-light);
  }

  @media only screen and (max-width: 800px) {
    .countdown {
      display: flex;
      flex-direction: column;
    }
    .countdown p {
      padding-top: 8px;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.2;
      transform: scale(0.9);
    }

    50% {
      opacity: 0.6;
      transform: scale(0.95);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
