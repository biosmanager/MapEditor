/** Declaration file generated by dts-gen */

declare module 'vue-virtual-scroller' {
	import Vue, { ComponentOptions, PluginObject } from 'vue';
	interface PluginOptions {
		installComponents?: boolean;
		componentsPrefix?: string;
	}

	export class RecycleScroller extends Vue {
		public components: {
			ResizeObserver: {
				beforeDestroy: any;
				methods: {
					addResizeHandlers: any;
					compareAndNotify: any;
					removeResizeHandlers: any;
				};
				mounted: any;
				name: string;
				render: any;
				staticRenderFns: any[];
			};
		};

		public directives: {
			ObserveVisibility: {
				bind: any;
				unbind: any;
				update: any;
			};
		};

		public name: string;

		public props: {
			buffer: {
				default: number;
				type: any;
			};
			direction: {
				default: string;
				type: any;
				validator: any;
			};
			emitUpdate: {
				default: boolean;
				type: any;
			};
			itemSize: {
				default: any;
				type: any;
			};
			items: {
				required: boolean;
				type: any;
			};
			keyField: {
				default: string;
				type: any;
			};
			minItemSize: {
				default: any;
				type: any[];
			};
			pageMode: {
				default: boolean;
				type: any;
			};
			prerender: {
				default: number;
				type: any;
			};
			sizeField: {
				default: string;
				type: any;
			};
			typeField: {
				default: string;
				type: any;
			};
		};

		public staticRenderFns: any[];

		public beforeDestroy(): void;

		public created(): void;

		public data(): any;

		public mounted(): void;

		public render(): any;

		public simpleArray(): any;

		public sizes(): any;

		public addListeners(): void;

		public addView(pool: any, index: any, item: any, key: any, type: any): any;

		public applyPageMode(): void;

		public getListenerTarget(): any;

		public getScroll(): any;

		public handleResize(): void;

		public handleScroll(event: any): void;

		public handleVisibilityChange(isVisible: any, entry: any): void;

		public itemsLimitError(): void;

		public removeListeners(): void;

		public scrollToItem(index: any): void;

		public scrollToPosition(position: any): void;

		public unuseView(view: any, ...args: any[]): void;

		public updateVisibleItems(checkItem: any): any;

	}
	export class DynamicScroller extends Vue {
		public components: {
			RecycleScroller: {
				beforeDestroy: any;
				components: {
					ResizeObserver: {
						beforeDestroy: any;
						methods: {
							addResizeHandlers: any;
							compareAndNotify: any;
							removeResizeHandlers: any;
						};
						mounted: any;
						name: string;
						render: any;
						staticRenderFns: any[];
					};
				};
				computed: {
					simpleArray: any;
					sizes: any;
				};
				created: any;
				data: any;
				directives: {
					ObserveVisibility: {
						bind: any;
						unbind: any;
						update: any;
					};
				};
				methods: {
					addListeners: any;
					addView: any;
					applyPageMode: any;
					getListenerTarget: any;
					getScroll: any;
					handleResize: any;
					handleScroll: any;
					handleVisibilityChange: any;
					itemsLimitError: any;
					removeListeners: any;
					scrollToItem: any;
					scrollToPosition: any;
					unuseView: any;
					updateVisibleItems: any;
				};
				mounted: any;
				name: string;
				props: {
					buffer: {
						default: number;
						type: any;
					};
					direction: {
						default: string;
						type: any;
						validator: any;
					};
					emitUpdate: {
						default: boolean;
						type: any;
					};
					itemSize: {
						default: any;
						type: any;
					};
					items: {
						required: boolean;
						type: any;
					};
					keyField: {
						default: string;
						type: any;
					};
					minItemSize: {
						default: any;
						type: any[];
					};
					pageMode: {
						default: boolean;
						type: any;
					};
					prerender: {
						default: number;
						type: any;
					};
					sizeField: {
						default: string;
						type: any;
					};
					typeField: {
						default: string;
						type: any;
					};
				};
				render: any;
				staticRenderFns: any[];
				watch: {
					items: any;
					pageMode: any;
					sizes: {
						deep: boolean;
						handler: any;
					};
				};
			};
		};

		public inheritAttrs: boolean;

		public name: string;

		public props: {
			direction: {
				default: string;
				type: any;
				validator: any;
			};
			items: {
				required: boolean;
				type: any;
			};
			keyField: {
				default: string;
				type: any;
			};
			minItemSize: {
				required: boolean;
				type: any[];
			};
		};

		public staticRenderFns: any[];

		public activated(): void;

		public created(): void;

		public data(): any;

		public deactivated(): void;

		public provide(): any;

		public render(): any;

		public itemsWithSize(): any;

		public listeners(): any;

		public simpleArray(): any;


		public forceUpdate(...args: any[]): void;

		public getItemSize(item: any, ...args: any[]): any;

		public onScrollerResize(): void;

		public onScrollerVisible(): void;

		public scrollToBottom(): void;

		public scrollToItem(index: any): void;

	}
	export class DynamicScrollerItem extends Vue {
		public inject: string[];

		public name: string;

		public props: {
			active: {
				required: boolean;
				type: any;
			};
			emitResize: {
				default: boolean;
				type: any;
			};
			index: {
				default: any;
				type: any;
			};
			item: {
				required: boolean;
			};
			sizeDependencies: {
				default: any;
				type: any[];
			};
			tag: {
				default: string;
				type: any;
			};
			watchData: {
				default: boolean;
				type: any;
			};
		};

		public beforeDestroy(): void;

		public created(): any;

		public mounted(): void;

		public render(h: any): any;

		public id(): any;

		public size(): any;


		public computeSize(id: any): void;

		public getBounds(): any;

		public onDataUpdate(): void;

		public onVscrollUpdate(_ref: any): void;

		public updateSize(): void;

		public updateWatchData(): void;

	}
}

