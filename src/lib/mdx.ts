import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BaseContent {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
}

const contentDir = path.join(process.cwd(), 'src/content');

export function getMdxContent(subDir: string): BaseContent[] {
  const directory = path.join(contentDir, subDir);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  
  const content = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content: mdxContent } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        frontmatter: data,
        content: mdxContent,
      };
    })
    .sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0));

  return content;
}

export function getMdxBySlug(subDir: string, slug: string): BaseContent | null {
  const filePath = path.join(contentDir, subDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content: mdxContent } = matter(fileContent);
  
  return {
    slug,
    frontmatter: data,
    content: mdxContent,
  };
}
