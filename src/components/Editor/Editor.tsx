import React, { useEffect, useState } from 'react';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { html, htmlLanguage } from '@codemirror/lang-html';
import { css, cssLanguage } from '@codemirror/lang-css';
import { json, jsonLanguage } from '@codemirror/lang-json';
import { python, pythonLanguage } from '@codemirror/lang-python';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { xml, xmlLanguage } from '@codemirror/lang-xml';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java, javaLanguage } from '@codemirror/lang-java';
import { rust, rustLanguage } from '@codemirror/lang-rust';
import { cpp, cppLanguage } from '@codemirror/lang-cpp';
import { lezer, lezerLanguage } from '@codemirror/lang-lezer';
import { php, phpLanguage } from '@codemirror/lang-php';
import { StreamLanguage, syntaxHighlighting } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { tcl } from '@codemirror/legacy-modes/mode/tcl';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { vb } from '@codemirror/legacy-modes/mode/vb';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck';
import { stylus } from '@codemirror/legacy-modes/mode/stylus';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { nginx } from '@codemirror/legacy-modes/mode/nginx';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { pascal } from '@codemirror/legacy-modes/mode/pascal';
import { liveScript } from '@codemirror/legacy-modes/mode/livescript';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript';
import { clojure } from '@codemirror/legacy-modes/mode/clojure';
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { r } from '@codemirror/legacy-modes/mode/r';
import CodeMirror, { Extension } from "@uiw/react-codemirror"
import useStyles from './Editor.styles';
import { discord } from '../../themes/discord';
import { basicSetup } from "@codemirror/basic-setup"
import Tab from './Tabs/Tabs';
import { italicDark } from '../../themes/italicDark';
const langs = {
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  json,
  html,
  css,
  python,
  markdown,
  xml,
  sql: sql,
  mysql: () => sql({ dialect: MySQL }),
  pgsql: () => sql({ dialect: PostgreSQL }),
  java,
  rust,
  cpp,
  lezer,
  php,
  go: () => StreamLanguage.define(go),
  shell: () => StreamLanguage.define(shell),
  lua: () => StreamLanguage.define(lua),
  swift: () => StreamLanguage.define(swift),
  tcl: () => StreamLanguage.define(tcl),
  yaml: () => StreamLanguage.define(yaml),
  vb: () => StreamLanguage.define(vb),
  powershell: () => StreamLanguage.define(powerShell),
  brainfuck: () => StreamLanguage.define(brainfuck),
  stylus: () => StreamLanguage.define(stylus),
  erlang: () => StreamLanguage.define(erlang),
  nginx: () => StreamLanguage.define(nginx),
  perl: () => StreamLanguage.define(perl),
  ruby: () => StreamLanguage.define(ruby),
  pascal: () => StreamLanguage.define(pascal),
  livescript: () => StreamLanguage.define(liveScript),
  scheme: () => StreamLanguage.define(scheme),
  toml: () => StreamLanguage.define(toml),
  vbscript: () => StreamLanguage.define(vbScript),
  clojure: () => StreamLanguage.define(clojure),
  coffeescript: () => StreamLanguage.define(coffeeScript),
  julia: () => StreamLanguage.define(julia),
  dockerfile: () => StreamLanguage.define(dockerFile),
  r: () => StreamLanguage.define(r)
}



export default function Editor(){
  const { classes } = useStyles(); 
  const [code, setCode] = useState('');
  const [editable, setEditable] = useState(true);
  const [extensions, setExtensions] = useState<Extension[]>();
  return (
         <>
          <Tab count={1} tabName={"example.ts"} isSaved={true} />
          <CodeMirror
          value={code}
          height="100vh"
          editable={editable}
          theme={italicDark}
          extensions={[javascript({typescript: true}), basicSetup]}
          className={classes.codeMirror}
          onChange={(value) => {
            setCode(value);
          }}
          />
         </>
  )
}