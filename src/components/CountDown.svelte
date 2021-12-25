<script>
  import { onDestroy, onMount } from "svelte";

  let endYear = new Date("December 31, 2021 23:59:59");
  let diff = endYear.getTime() - new Date().getTime();

  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(diff / 1000 / 60 / 60);
</script>

<div class="countdown">
  <p>
    {days} Days
  </p>
  <p>
    {hours} Hours
  </p>
</div>

<style>
  .countdown {
    font-size: 32px;
    text-align: center;
    color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
