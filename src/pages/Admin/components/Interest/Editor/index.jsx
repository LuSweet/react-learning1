/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-04-02 14:17:31
 * @Description: file content
 */
import React, { useState } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const Editor = () => {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState('<p>你好 <b>世界!</b></p>'))
  const [outputHTML, setOutputHTML] = useState('<p>你好 <b>世界!</b></p>')

  const handleEditorChange = editorState => {
    setEditorState(editorState)
    setOutputHTML(editorState.toHTML())
  }

  const submitContent = (data) => {
    console.log('ming', data)
  }

  return (
    <>
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
      <h5>输出内容</h5>
      <div className='output-content'>{outputHTML}</div>
    </>
  )
}

export default Editor
