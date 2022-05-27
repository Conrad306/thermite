import { EditorView } from "@codemirror/view"
import { HighlightStyle } from "@codemirror/language"
import {tags} from "@lezer/highlight"

export const lightTheme = EditorView.theme({})

export const lightHighlight = HighlightStyle.define([]);
