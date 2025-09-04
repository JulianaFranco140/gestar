'use client';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import AuthForm from '../../../components/Auth';
import { loginFields } from '../../../components/Auth/authConfigs';

export default function Login() {
  const router = useRouter();
  
  const handleLoginSubmit = (formData) => {
    console.log('Datos del login:', formData);
    router.push('/dashboard');
  };

  return (
    <div>
      <Header />
      <AuthForm 
        formType="login"
        title="Iniciar sesión"
        fields={loginFields}
        submitText="Iniciar sesión"
        onSubmit={handleLoginSubmit}
        footerText="¿No tienes cuenta?"
        footerLink="/signup"
        footerLinkText="Regístrate aquí"
        isReverse={true}
        imageSrc="/dibujoembarazo.png"
        imageText="Bienvenida de vuelta. Continúa cuidando tu embarazo con nosotros."
      />
    </div>
  );
}
