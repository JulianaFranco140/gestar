'use client';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import AuthForm from '../../../components/Auth';
import { signupFields } from '../../../components/Auth/authConfigs';

export default function Signup() {
  const router = useRouter();
  
  const handleSignupSubmit = (formData) => {
    console.log('Datos del registro:', formData);
    // Aquí puedes agregar la lógica de registro
    // Por ahora, simplemente redirigimos al dashboard
    router.push('/dashboard');
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
