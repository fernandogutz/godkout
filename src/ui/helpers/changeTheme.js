export const changeTheme = theme => {

    if (theme === "oscuro") {
      document.documentElement.style.setProperty('--bg1', '#101010');
      document.documentElement.style.setProperty('--bg2', '#1e1e1e');
      document.documentElement.style.setProperty('--bg3', '#303030');
      document.documentElement.style.setProperty('--color1', '#ffffff');
      document.documentElement.style.setProperty('--color2', '#d6d6d6');
      document.documentElement.style.setProperty('--color3', '#adadad');
      document.documentElement.style.setProperty('--color4', '#666666');
      document.documentElement.style.setProperty('--primary', '#efb810');
      document.documentElement.style.setProperty('--primary2', '#fae299');
      document.documentElement.style.setProperty('--error', '#b11d1d');
      document.documentElement.style.setProperty('--success', '#74C335');
      document.documentElement.style.setProperty('--verificated', '#74bff4');
      document.documentElement.style.setProperty('--gold', '#e8b34b');
      document.documentElement.style.setProperty('--silver', '#c0c0c0');
      document.documentElement.style.setProperty('--bronze', '#a97142');

    } else {
      document.documentElement.style.setProperty('--bg1', '#ffffff');
      document.documentElement.style.setProperty('--bg2', '#f6f6f6');
      document.documentElement.style.setProperty('--bg3', '#e9e9e9');
      document.documentElement.style.setProperty('--color1', '#000000');
      document.documentElement.style.setProperty('--color2', '#333333');
      document.documentElement.style.setProperty('--color3', '#666666');
      document.documentElement.style.setProperty('--color4', '#999999');
      document.documentElement.style.setProperty('--primary', '#efb810');
      document.documentElement.style.setProperty('--primary2', '#fae299');
      document.documentElement.style.setProperty('--error', '#b11d1d');
      document.documentElement.style.setProperty('--success', '#74C335');
      document.documentElement.style.setProperty('--verificated', '#74bff4');
      document.documentElement.style.setProperty('--gold', '#e8b34b');
      document.documentElement.style.setProperty('--silver', '#c0c0c0');
      document.documentElement.style.setProperty('--bronze', '#a97142');
    }

  }
  