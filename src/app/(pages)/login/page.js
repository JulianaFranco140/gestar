'use client';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import AuthForm from '../../../components/Auth';
import { loginFields } from '../../../components/Auth/authConfigs';

export default function Login() {
  const router = useRouter();
  
  const handleLoginSubmit = async (formData) => {
    const body = {
      correo: formData.email,
      password: formData.password
    };
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        const user = await res.json();
        if (typeof window !== 'undefined') {
          localStorage.setItem('gestarUser', JSON.stringify(user));
        }
        router.push('/dashboard');
      } else {
        const error = await res.json();
        alert(error.error || 'Error al iniciar sesión');
      }
    } catch (e) {
      console.error('Error en login:', e);
      alert('Error de red o servidor');
    }
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
