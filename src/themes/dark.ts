import { EditorView } from "@codemirror/view"
import { HighlightStyle } from "@codemirror/language"
import {tags} from "@lezer/highlight"

export const darkTheme = EditorView.theme({})

export const darkHighlight = HighlightStyle.define([]);
