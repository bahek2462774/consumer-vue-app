<script setup>
</script>

<template>
  <table>
			<thead>
				<th>Group 1</th>
				<th>Group 2</th>
			</thead>
			<tr>
				<td>
					<ComponentA state-id="some-state-id-1" />
					<ComponentB state-id="some-state-id-1" />
					<ComponentC state-id="some-state-id-1" />
					<ComponentD state-id="some-state-id-1" />
				</td>
				<td>
					<ComponentA state-id="some-state-id-2" />
					<ComponentB state-id="some-state-id-2" />
					<ComponentC state-id="some-state-id-2" />
					<ComponentD state-id="some-state-id-2" />
				</td>
			</tr>
		</table>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
