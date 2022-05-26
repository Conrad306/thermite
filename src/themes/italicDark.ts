import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { Extension } from "@codemirror/state"
import { EditorView } from "@codemirror/view"
import {tags} from "@lezer/highlight"

export const italicDarkTheme = EditorView.theme({
    '&': {
        color: '#abb2bf', 
        backgroundColor: '#1c1f2b'
    },
    ".cm-cursor, .cm-dropCursor": {borderLeftColor: "#528bff"},
    ".cm-content": {
        caretColor: '#528bff'
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {backgroundColor: "#3d465e"},
    ".cm-activeLine": { 
        backgroundColor: "#232836"
    },
    ".cm-gutters": {
        backgroundColor: "#1c202b", 
        color: "#383e4a", 
        borderRight: "2px solid #232730"
    },
    ".cm-activeLineGutter": { 
        backgroundColor: "#232836" 
    }
})
export const italicDarkHighlight = HighlightStyle.define([
    {tag: tags.keyword,
        color: '#c678dd'},
       {tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
        color: '#324aa8'},
       {tag: [tags.function(tags.variableName), tags.labelName],
        color: '#4814a8'
       },
       {tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
        color: '#d19a66'},
       {tag: [tags.definition(tags.name), tags.separator],
        color: '#abb2bf'},
       {tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
        color: '#6dc5cf'},
       {tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, tags.special(tags.string)],
        color: '#14a854'},
       {tag: [tags.meta, tags.comment],
        color: '#6b6a6a',
        fontStyle: 'italic'},
       {tag: tags.strong,
        fontWeight: "bold"},
       {tag: tags.emphasis,
        fontStyle: "italic"},
       {tag: tags.strikethrough,
        textDecoration: "line-through"},
       {tag: tags.link,
        color: '#6b6a6a',
        textDecoration: "underline"},
       {tag: tags.heading,
        fontWeight: "bold",
        color: '#324aa8'},
       {tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
        color: '#a8581e' },
       {tag: [tags.processingInstruction, tags.string, tags.inserted],
        color: '#78a8c2'},
       {tag: tags.invalid,
        color: '#ffffff'},
])

export const italicDark: Extension = [italicDarkTheme, syntaxHighlighting(italicDarkHighlight)]