import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { WhoAmIProvider } from '@/common/contexts/WhoAmIProvider';
import { AdminGuard } from '@/components/AdminGuard';
import store from '@/store';
import { Provider } from 'react-redux';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<WhoAmIProvider>
					<AdminGuard>
						<Component {...pageProps} />
					</AdminGuard>
				</WhoAmIProvider>
			</SessionProvider>
		</Provider>
	);
}
