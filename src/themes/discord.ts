import { EditorView } from "@codemirror/view"
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import {tags} from "@lezer/highlight"
import { Extension } from "@codemirror/state";
const green = "#619636";
const red = "#eb4034";
const blue = "#2648e0";
const nothing = "#a5b0af";
const blueGreen = "#2f9471";
const yellow = "#ebb134";
const bg = "#181a1c"
export const discordTheme = EditorView.theme({
    '&': {
        color: nothing, 
        backgroundColor: bg,
    },
    ".cm-gutters": {
        backgroundColor: '#1f2124', 
        border: 'none'
    },
    ".cm-activeLine": {
        backgroundColor: '#2c2f33'
    },
    ".cm-activeLineGutter":{
        backgroundColor: '#2c2f33'
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {backgroundColor: "#2c2f33"},
})

export const discordHighlight = HighlightStyle.define([
    {
        tag: [tags.typeName],
        color: red
    }, 
    {
        tag: [tags.number, tags.bool, tags.regexp, tags.string, tags.comment], 
        color: blueGreen
    }, 
    {
        tag: tags.function(tags.variableName),
        color: blue
    }, 
    {
        tag: [tags.definition(tags.name)], 
        color: nothing,
    }, 
    {
        tag: tags.keyword, 
        color: green
    },
    {
        tag: tags.className,
        color: yellow
    }
]);

export const discord: Extension = [discordTheme, syntaxHighlighting(discordHighlight)];