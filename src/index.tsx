/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-07-01 16:48:13
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-07-01 17:02:16
 * @FilePath: /reactjs-template/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from 'react-dom/client';

import { Root } from '@/components/Root';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import './mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
