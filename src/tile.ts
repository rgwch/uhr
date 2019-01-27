import { bindable, inlineView } from "aurelia-framework";

@inlineView(`<template>
  <div t.bind="letter"></div>
</template>`)
export class Tile{
  @bindable letter="?"
}
