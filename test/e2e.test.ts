import { DUMMY_APPLICATION_OWNER } from 'typedoc/dist/lib/utils/component';
import { MermaidPlugin } from '../src/plugin';

const plugin = new MermaidPlugin(DUMMY_APPLICATION_OWNER);

describe('MermaidPlugin e2e', () => {
  it('onBegin not to throw Exception', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contexts: any[] = [
      {
        project: {
          reflections: {
            1: {
              comment: {
                tags: [
                  {
                    paramName: '',
                    tagName: 'mermaid',
                    text: 'aaa',
                  },
                ],
              },
            },
          },
        },
      },
      {
        project: {
          reflections: {},
        },
      },
      {
        project: {
          reflections: {
            1: {},
          },
        },
      },
      {
        project: {
          reflections: {
            1: {
              comment: {},
            },
          },
        },
      },
    ];

    contexts.forEach((context) => expect(() => plugin.onResolveBegin(context)).not.toThrow());
  });

  it('onPageEnd not to throw Exception', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pageEvents: any[] = [{ contents: '' }, {}];

    pageEvents.forEach((pageEvent) => expect(() => plugin.onPageEnd(pageEvent)).not.toThrow());
  });
});
