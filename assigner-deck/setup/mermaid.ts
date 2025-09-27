import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Assignar Brand Colors - High Contrast
      primaryColor: '#A4161A',        // Ruby red - main elements
      primaryTextColor: '#FFFFFF',    // White text
      primaryBorderColor: '#FFFFFF',  // White borders for visibility
      lineColor: '#FFFFFF',           // White connection lines

      // Background colors
      background: 'transparent',      // Transparent background
      secondaryColor: '#BA181B',      // Fire brick - secondary elements
      tertiaryColor: '#E5383B',       // Cinnabar - tertiary

      // Node specific colors - Better contrast
      nodeBkg: '#A4161A',            // Node backgrounds
      nodeTextColor: '#FFFFFF',       // Node text
      nodeBorder: '#FFFFFF',         // White borders

      // Flowchart specific - Enhanced visibility
      flowchartBkg: '#A4161A',
      flowchartNodeBorder: '#FFFFFF',
      flowchartNodeText: '#FFFFFF',
      flowchartLinkText: '#FFFFFF',

      // Activity diagram
      actorBkg: '#A4161A',
      actorBorderColor: '#E5383B',
      actorTextColor: '#FFFFFF',
      actorLineColor: '#E5383B',
      labelBoxBkgColor: '#161A1D',
      labelBoxBorderColor: '#E5383B',
      labelTextColor: '#F5F3F4',

      // Sequence diagram
      sequenceActorBkg: '#A4161A',
      sequenceActorBorder: '#E5383B',
      sequenceActorTextColor: '#FFFFFF',
      sequenceBoxBorder: '#E5383B',
      sequenceBoxText: '#F5F3F4',
      sequenceMessageText: '#F5F3F4',

      // Git diagram
      git0: '#A4161A',
      git1: '#BA181B',
      git2: '#E5383B',
      git3: '#B1A7A6',
      git4: '#660708',

      // Class diagram
      classBkg: '#A4161A',
      classBorderColor: '#E5383B',
      classText: '#FFFFFF',

      // State diagram
      stateBkg: '#A4161A',
      stateBorderColor: '#E5383B',
      stateTextColor: '#FFFFFF',

      // Journey diagram
      journeyTaskBkgColor: '#A4161A',
      journeyTaskTextColor: '#FFFFFF',
      journeyTaskBorderColor: '#E5383B',

      // Gantt chart
      gridColor: '#E5383B',
      taskTextColor: '#F5F3F4',
      activeTaskBkgColor: '#A4161A',
      activeTaskBorderColor: '#E5383B',
      gridLinesColor: '#B1A7A6',

      // Error and warning colors
      errorBkgColor: '#660708',
      errorTextColor: '#FFFFFF',
      warningBkgColor: '#BA181B',
      warningTextColor: '#FFFFFF',

      // Info colors
      infoColorFill: '#B1A7A6',
      infoTextColor: '#0B090A'
    },

    // Additional configuration
    startOnLoad: true,
    securityLevel: 'loose',

    // Enable max width scaling
    useMaxWidth: true,


    // Flowchart specific config - Simple and reliable
    flowchart: {
      diagramPadding: 20,
      nodeSpacing: 50,
      rankSpacing: 60,
      curve: 'basis',
      htmlLabels: false,
      useMaxWidth: true
    },

    // Sequence diagram config
    sequence: {
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35
    },

    // Gantt config - Improved readability
    gantt: {
      leftPadding: 100,
      gridLineStartPadding: 50,
      fontSize: 14,
      fontFamily: '"Arya", Arial, sans-serif',
      sectionFontSize: 20,
      barHeight: 25,
      numberSectionStyles: 4
    }
  }
})