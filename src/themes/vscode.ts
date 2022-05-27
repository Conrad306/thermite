import { EditorView } from "@codemirror/view"
import { HighlightStyle } from "@codemirror/language"
import { tags } from "@lezer/highlight";

export const vscodeTheme = EditorView.theme({})

export const vscodeHighlight = HighlightStyle.define([
    {
        tag: [tags.comment, tags.punctuation, tags.definition(tags.comment)], 
        color: "#6A9955"
    }, 
    {
        tag: [tags.keyword]
    }
]);
