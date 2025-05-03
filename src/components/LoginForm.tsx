import React, { useEffect, useState } from 'react';
import { Input, Button, Card, Typography } from '@material-tailwind/react';

export default function LoginForm() {
  const [hasSession, setHasSession] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem('session') || sessionStorage.getItem('session');
    setHasSession(!!session);
    setIsLogin(!session); // Eğer session varsa signup'a yönlendir, yoksa signin
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center p-6">
          <Typography variant="h4" color="blue-gray">
            {isLogin ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
          </Typography>
          <Typography color="gray" className="mt-1">
            {isLogin
              ? 'Devam etmek için hesabınıza giriş yapın'
              : 'Yeni hesabınızı birkaç adımda oluşturun'}
          </Typography>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <form className="space-y-4" id="authForm">
            {/* Name Field (Sadece Sign Up'da gözükür) */}
            {!isLogin && (
              <Input
                type="text"
                label="Ad Soyad"
                name="name"
                required
                className="w-full"
              />
            )}
            <Input
              type="email"
              label="Email"
              name="email"
              required
              className="w-full"
            />
            <Input
              type="password"
              label="Şifre"
              name="password"
              required
              minLength={6}
              className="w-full"
            />
            <Button
              type="submit"
              fullWidth
              color="blue"
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </Button>
          </form>
        </div>
        <div className="pt-0 text-center p-6">
          <Typography variant="small">
            {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
            <button
              id="toggleAuth"
              className="ml-1 font-bold text-blue-500 hover:text-blue-700"
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
            </button>
          </Typography>
          <div className="mt-4 flex justify-center gap-2">
            <Button variant="outlined" size="sm" color="blue-gray">
              <span className="mr-1">G</span>
              Google
            </Button>
            <Button variant="outlined" size="sm" color="blue-gray">
              <span className="mr-1">f</span>
              Facebook
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
        >
          {mode === 'signin' ? 'Hesabın yok mu? Sign Up' : 'Zaten hesabın var mı? Sign In'}
        </button>
      </div>
    </div>
  );
}
