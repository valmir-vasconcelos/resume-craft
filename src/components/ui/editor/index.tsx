'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from '@/lib/utils'
import MenuBar from './menu-bar'

type EditorProps = {
    value: string;
    onChange?: (value: string) => void;
    className?: string;
}

const Editor = ({ value, onChange, className }: EditorProps) => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-4'
                    }
                },
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-4'
                    }
                }
            }),
            Underline, TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: "focus:outline-none h-full p-4"
            }
        },
        onCreate: ({ editor }) => {
            onChange?.(editor.getHTML())
        },
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML())
        },
        autofocus: false
    })

    return (
        <div className={cn("bg-background border border-muted rounded-xl w-full flex flex-col", className)}>
            <MenuBar editor={editor} />
            <div className='h-full [&>div]:h-full flex flex-col overflow-y-auto'>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

export default Editor;