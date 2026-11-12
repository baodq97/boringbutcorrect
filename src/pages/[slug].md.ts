import type { APIRoute } from 'astro';
import { postPaths } from '../lib/posts';
import { markdownTwin } from '../lib/markdown';

export const getStaticPaths = () => postPaths('vi');

export const GET: APIRoute = ({ props, site }) => markdownTwin(props.post, site!);
