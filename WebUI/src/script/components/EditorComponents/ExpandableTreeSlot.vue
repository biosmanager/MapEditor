<template>
	<div class="tree-node" :class="{ selected: selected }" @mouseleave="NodeHoverEnd()" @mouseenter="NodeHover($event,node,tree)">
		<div v-if="hasVisibilityOptions" class="visibility-node">
			<div class="enable-container icon-container" @click="ToggleEnabled($event, node, tree)">
				<img :src="enabledIcnSrc"/>
			</div>
			<div class="selectable-container icon-container" @click="ToggleRaycastEnabled($event, node, tree)">
				<img :src="raycastEnabledIcnSrc"/>
			</div>
		</div>
		<div class="tree-node" :style="nodeStyle(node)" @click="SelectNode($event, node, tree)">
			<div class="expand-container icon-container" @click="ToggleNode($event,node,tree)">
				<img v-if="node.children.length > 0" :class="{ expanded: node.state.open}"
					:src="require(`@/icons/editor/ExpandChevronRight_16x.svg`)"/>
			</div>
			<div class="icon-container">
				<img :class="'Icon Icon-' + node.type"/>
			</div>
			<div class="text-container">
				<Highlighter v-if="search !== ''" :text="node.name" :search="search"/>
				<span class="slot-text" v-else>
					{{ nodeText }}
				</span>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Highlighter from '@/script/components/widgets/Highlighter.vue';
import InfiniteTree, { Node, INode } from 'infinite-tree';

@Component({ components: { Highlighter } })
export default class ExpandableTreeSlot extends Vue {
	@Prop({ default: false })
	hasVisibilityOptions?: boolean;

	@Prop()
	node: Node;

	@Prop()
	tree: any;

	@Prop()
	search: any;

	@Prop()
	nodeText: string;

	@Prop()
	selected: boolean;

	@Prop()
	content: any[] | null;

	get enabled() {
		if (this.content && this.content[0]) {
			return this.content[0].enabled;
		} else {
			return true;
		}
	}

	get raycastEnabled() {
		if (this.content && this.content[0]) {
			return this.content[0].raycastEnabled;
		} else {
			return true;
		}
	}

	get enabledIcnSrc() {
		return this.enabled ? require('@/icons/editor/eye.svg') : require('@/icons/editor/eye-crossed.svg');
	}

	get raycastEnabledIcnSrc() {
		return this.raycastEnabled ? require('@/icons/editor/select.svg') : require('@/icons/editor/select-crossed.svg');
	}

	private nodeStyle(node: Node) {
		if (!node.state) {
			console.error('Missing node state: ' + node);
		}
		return {
			'margin-left': (node.state.depth * 18).toString() + 'px'
		};
	}

	@Emit('node:click')
	public SelectNode(e: MouseEvent, node: Node, tree: InfiniteTree) {
		this.tree.selectNode(node);
		this.$forceUpdate();
		return { event: e, nodeId: node.id };
	}

	@Emit('node:toggle-enable')
	public ToggleEnabled(e: MouseEvent, node: Node, tree: InfiniteTree) {
		return node;
	}

	@Emit('node:toggle-raycast-enable')
	public ToggleRaycastEnabled(e: MouseEvent, node: Node, tree: InfiniteTree) {
		return node;
	}

	public ToggleNode(e: MouseEvent, node: Node, tree: InfiniteTree) {
		const toggleState = this.toggleState(node);
		if (toggleState === 'closed') {
			tree.openNode(node);
		} else if (toggleState === 'opened') {
			tree.closeNode(node);
		}
	}

	@Emit('node:hover')
	private NodeHover(e: MouseEvent, node: Node, tree: InfiniteTree) {
		return node.id;
	}

	@Emit('node:hover-end')
	private NodeHoverEnd() {
		//
	}

	private toggleState(node: Node) {
		const hasChildren = node.children.length > 0;
		let toggleState = '';
		if ((!hasChildren && node.loadOnDemand) || (hasChildren && !node.state.open)) {
			toggleState = 'closed';
		}
		if (hasChildren && node.state.open) {
			toggleState = 'opened';
		}
		return toggleState;
	}
}
</script>
<style lang="scss" scoped>
	.visibility-node {
		display: flex;
		align-content: center;
		height: 13px;
		background-color: #404040;

		* {
			margin: 0 2px;
		}
	}

	.tree-node {
		display: flex;
		font-family: sans-serif;
		/*font-size: 1.3vmin;*/
		user-select: none;
		align-content: center;
		height: 13px;
		/*white-space: nowrap;*/

		.text-container {
      width: available;
      overflow: hidden;
		}
		.expand-container img {
			transition: transform 0.1s;

			&.expanded {
				transform: rotate(90deg);
			}
		}
		.icon-container {
			width: 13px;;
			height: 100%;
			color: #6d6d6d;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}
		&:hover {
			background-color: #343434;
		}
		&.selected {
			background-color: #404040;
			color: #409EFF;
		}

		.slot-text {
			margin-left: 5px;
		}
	}
</style>
