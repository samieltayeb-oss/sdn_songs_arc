const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const workspaceCss = `
/* Workspace Grid */
.workspace-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
@media (max-width: 900px) {
  .workspace-grid {
    grid-template-columns: 1fr;
  }
}

.workspace-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ws-transpose-btn, .ws-vocal-test-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  min-width: 30px;
}
`;

fs.writeFileSync('styles.css', css + '\n' + workspaceCss);
console.log('Appended workspace CSS to styles.css');
