import { MDXEditor } from '@mdxeditor/editor/MDXEditor';
import '@mdxeditor/editor/style.css';
import './markdown.css';
import { ALL_PLUGINS, READONLY_PLUGINS } from './_boilerplate';
import { cn } from '@/utils/style';

interface MarkdownEditorProps {
    value: string;
    onChange?: (v: any) => void;
    readOnly?: boolean;
}

const MarkdownEditor = ({ value, onChange, readOnly }: MarkdownEditorProps) => {
    return (
        <MDXEditor
            contentEditableClassName={cn('prose', !readOnly && 'min-h-[400px]')}
            markdown={value}
            onChange={onChange}
            plugins={readOnly ? READONLY_PLUGINS : ALL_PLUGINS}
            readOnly={readOnly}
        />
    );
};

export default MarkdownEditor;
