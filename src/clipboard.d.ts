import { SvelteComponent } from "svelte";

declare class Clipboard extends SvelteComponent {
  constructor(options: any);

  $$prop_def: {
    text: string;
  };
}

export default Clipboard;
