<template>
  <div>
    <h1>ETC0020</h1>
    <div>
      <button type="button" @click="$router.push({ name: 'ETC0010' })">Next Page</button>
      <button type="button" @click="$router.back()">Prev Page</button>
    </div>
  </div>
</template>
