import MarkdownIt from "markdown-it";
import markdownitEmoji from "markdown-it-emoji"
import twemoji from "twemoji";

export default function renderMarkdown(markdown: string) {
    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true
    });
    md.use(markdownitEmoji);
    md.renderer.rules.emoji = function(token, idx) {
        return twemoji.parse(token[idx].content);
        };
    return md.render(markdown);
}