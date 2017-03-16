// Your init script
//
// Atom will evaluate this file each time a new window is opened. It is run
// after packages are loaded/activated and after the previous editor state
// has been restored.
//
// An example hack to log to the console when each text editor is saved.
//
// atom.workspace.observeTextEditors (editor) ->
//   editor.onDidSave ->
//     console.log "Saved! //{editor.getPath()}"
// atom.commands.add('atom-text-editor', 'atom:get-key-maps', () => {
//   const editor = atom.workspace.getActiveTextEditor()
//   if(!editor) {
//     console.log('editor not found')
//     return
//   }
//   const keybindings = atom.keymaps.getKeyBindings()
//     .filter(d => d.command !== 'native!')
//     .filter(d => d.source.includes('app.asar'))
//     .map(d => {
//       return {
//         keystrokes: d.keystrokes,
//         command: d.command
//       }
//     })
//     .reduce((ag,d) => {
//       const ctx = d.command.split(':')[0]
//       if(!ag[ctx]) {
//         ag[ctx] = []
//       }
//       ag[ctx].push(d)
//       return ag
//     }, {})
//   editor.insertText(JSON.stringify(keybindings, null, 2))
// })
