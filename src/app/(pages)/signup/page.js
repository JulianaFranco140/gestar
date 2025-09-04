'use client';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import AuthForm from '../../../components/Auth';
import { signupFields } from '../../../components/Auth/authConfigs';

export default function Signup() {
  const router = useRouter();
  
  const handleSignupSubmit = async (formData) => {
    // Mapear campos del frontend a backend
    const body = {
      nombres: formData.name,
      correo: formData.email,
      password: formData.password,
      genero: formData.genero,
      rol: formData.rol || 'gestante'
    };
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
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
        alert(error.error || 'Error en el registro');
      }
    } catch (e) {
      alert('Error de red o servidor');
    }
  };

  return (
    <div>
      <Header />
      <AuthForm 
        formType="signup"
        title="Registrarse"
        fields={signupFields}
        submitText="Registrarse"
        onSubmit={handleSignupSubmit}
        footerText="¿Ya tienes cuenta?"
        footerLink="/login"
        footerLinkText="Inicia sesión aquì"
        isReverse={false}
        imageSrc="/dibujoembarazo.png"
        imageText="¡Únete a miles de mamás que ya confían en GeStar para su embarazo!"
      />
    </div>
  );
}
