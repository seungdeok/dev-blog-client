export const markdownStyle = `
  .w-md-editor.w-md-editor-show-live {
    min-height: 50vh !important;
  }
  .w-md-editor-content {
    min-height: calc(50vh - 29.1px) !important;
  }
  .wmde-markdown.wmde-markdown-color {
    background-color: transparent;
  }

  .wmde-markdown ol, .wmde-markdown ul {
    list-style: revert;
  }

  @media (prefers-color-scheme: dark) {
    .wmde-markdown {
      color: #24292f;
    }
  }
`;
