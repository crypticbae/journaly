export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('daisyui-theme');
              var validThemes = [
                'light', 'dark', 'cupcake', 'valentine', 'garden', 'aqua', 
                'pastel', 'wireframe', 'retro', 'cyberpunk', 'synthwave', 
                'halloween', 'forest', 'black', 'luxury', 'dracula', 'night', 
                'coffee', 'winter', 'dim', 'sunset', 'nord'
              ];
              
              console.log('ThemeScript: Initial theme from localStorage:', theme);
              
              if (theme && validThemes.includes(theme)) {
                document.documentElement.setAttribute('data-theme', theme);
                console.log('ThemeScript: Applied theme:', theme);
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
                console.log('ThemeScript: Applied default theme: light');
              }
            } catch (e) {
              console.error('ThemeScript error:', e);
              document.documentElement.setAttribute('data-theme', 'light');
            }
          })();
        `,
      }}
    />
  )
} 