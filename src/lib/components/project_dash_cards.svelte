<script lang="ts">
	
	import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="grid grid-cols-4 gap-4">


<Card.Root>
	<Card.Header
		class="flex flex-row items-center justify-between space-y-0 pb-2"
	>
		<Card.Title class="text-sm font-medium">Total Conversations</Card.Title>
		
	</Card.Header>
	<Card.Content>
		<p class="text-muted-foreground text-xs">Number of interactions your bot has handled.</p>
		<div class="text-2xl font-bold">573</div>
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header
		class="flex flex-row items-center justify-between space-y-0 pb-2"
	>
		<Card.Title class="text-sm font-medium">Total Tokens</Card.Title>
		
	</Card.Header>
	<Card.Content>
		<p class="text-muted-foreground text-xs">Count of data units processed by your bot.</p>
		<div class="text-2xl font-bold">+460</div>
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header
		class="flex flex-row items-center justify-between space-y-0 pb-2"
	>
		<Card.Title class="text-sm font-medium">Total Files</Card.Title>
		
	</Card.Header>
	<Card.Content>
		<p class="text-muted-foreground text-xs">Number of files used for training your bot.</p>
		<div class="text-2xl font-bold">+10</div>
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header
		class="flex flex-row items-center justify-between space-y-0 pb-2"
	>
		<Card.Title class="text-sm font-medium">Usage Cost</Card.Title>
		
	</Card.Header>
	<Card.Content>
		<p class="text-muted-foreground text-xs">Your total spending on bot activity and resources.</p>
		<div class="text-2xl font-bold">$350</div>
	</Card.Content>
</Card.Root>

</div>