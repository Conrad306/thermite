import { EditorView } from "@codemirror/view"
import { HighlightStyle } from "@codemirror/language"
import {tags} from "@lezer/highlight"

export const italicLightTheme = EditorView.theme({})

export const italicLightHighlight = HighlightStyle.define([]);
