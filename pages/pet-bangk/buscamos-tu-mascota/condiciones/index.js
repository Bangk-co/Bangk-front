import React from "react";
import { Col, Div, Text } from "@/styles/Common";
import { BulletPoint, Wrapper } from "@/styles/Legales";
import { theme } from "@/styles/theme";
import Image from "next/image";
import arrow from "@/assets/icons/green-arrow.svg";

const LookingPetConditions = ({ isMobile, isTablet }) => {

  const hrProps = {
    background: theme.colors.green,
    height: "1px",
    width: "100%",
    marginBottom: isMobile || isTablet ? "60px" : "100px",
    marginTop: isMobile || isTablet ? "60px" : "100px",
  };

  const glosary = [
    {
      word: "El usuario",
      definition:
        "Es toda persona natural que accede a la plataforma digital de propiedad de Building Life Technologies S.A.S. (BLT-Bangk), con el fin de contratar el servicio de búsqueda digital de mascotas a través de una pauta automatizada provista por el sistema Finders.Pet. Generalmente, el usuario es el dueño o responsable de una mascota (perro o gato) que se ha extraviado y desea maximizar sus probabilidades de recuperación mediante la difusión digital de alertas de pérdida. Para acceder al servicio, EL USUARIO debe diligenciar sus datos personales, cargar la información relevante de la mascota perdida (fotografías, descripción, última ubicación conocida), seleccionar uno de los paquetes disponibles y realizar el pago a través de la pasarela electrónica autorizada Wompi. Al realizar esta operación, EL USUARIO acepta íntegramente los Términos y Condiciones del servicio, así como la Política de Tratamiento de Datos Personales vigente. EL USUARIO declara actuar de buena fe, en representación legítima de la mascota reportada como extraviada, y se compromete a suministrar información veraz y completa, así como a utilizar el servicio conforme a la ley colombiana y los fines para los cuales fue diseñado.",
    },
    {
      word: "Building Life Technologies S.A.S. (BLT – Bangk)",
      definition: "Es una sociedad legalmente constituida en Colombia, titular de la marca Bangk y propietaria del sitio web donde se comercializa el servicio digital de búsqueda de mascotas. BLT actúa como comercializador autorizado de la solución tecnológica desarrollada por Finders.Pet, prestando servicios de intermediación comercial, gestión de pagos, soporte al usuario y divulgación digital del servicio. Su objeto social se centra en ofrecer soluciones tecnológicas avanzadas para el sector financiero, asegurador y otros sectores, aplicando innovación y herramientas digitales para mejorar la experiencia del cliente y facilitar el acceso a servicios especializados."
    },
    {
      word: "JT ADS performance LLC",
      definition: "Es una sociedad de responsabilidad limitada legalmente constituida en los Estados Unidos de América, con domicilio en 2201 Menaul Blvd NE, Ste A, Albuquerque, NM 87107, identificada con el Employer Identification Number (EIN) 61-2117668. Su representante legal es Juan C. Tabares Londoño, en calidad de Sole Member (MBR). JT ADS PERFORMANCE LLC es la titular, desarrolladora y proveedora del servicio Finders.Pet, una plataforma tecnológica especializada en la generación automatizada de campañas publicitarias georreferenciadas en redes sociales, cuyo fin es facilitar y apoyar la búsqueda de mascotas extraviadas, a través de mecanismos de difusión digital integrados con herramientas de geolocalización y segmentación comunitaria."
    },
  ]

  return (
    <Wrapper>
     <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb="40px"
        style={{ lineHeight: 0.8 }}
      >
        Buscamos tu mascota
        <br />
        <span style={{ fontSize: theme.fonts.size.h2 }}>
          Condiciones generales
        </span>
      </Text>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Glosario de términos
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col gap="10px">
        {glosary.map((item, index) => (
          <Text
            key={index}
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primary}
            style={{ textAlign: "left" }}
          >
            <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
              {item.word}:
            </span>{" "}
            {item.definition}
          </Text>
        ))}
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Consideraciones iniciales
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Text
        color={theme.colors.green}
        font={theme.fonts.family.primary}
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
        mt="10px"
      >
        Al utilizar la plataforma y contratar el servicio, el Usuario acepta expresamente estos
        Términos y Condiciones (en adelante, “T&C”), así como la Política de Privacidad. En caso
        de no estar de acuerdo con los mismos, deberá abstenerse de hacer uso del servicio.
        <br />
        <br />
        La contratación del servicio implica una relación comercial entre el Usuario y Bangk
        como intermediario comercial, sin que esto genere una relación directa entre el Usuario
        y Finders.Pet, quien actúa como proveedor técnico del servicio contratado.
      </Text>

      <hr style={hrProps} />
      
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Términos y condiciones
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          1. Naturaleza y alcance del servicio
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Finders.Pet es una plataforma tecnológica con fines informativos y publicitarios,
          diseñada para asistir en la difusión digital de alertas sobre mascotas perdidas. Su
          propósito principal es ayudar a los dueños de mascotas a maximizar la visibilidad de su
          caso mediante herramientas de geolocalización, contenido visual (imágenes) y
          campañas automatizadas en redes sociales, de forma que la comunidad pueda
          contribuir con información útil que facilite el reencuentro.
          <br />
          <br />
          El servicio ofrecido por Finders.Pet, comercializado a través de la plataforma web
          Bangk, no comprende la localización física, búsqueda activa, ni rescate directo de
          animales. La plataforma actúa como un canal de comunicación y promoción eficiente,
          pero el proceso físico de recuperación de la mascota recae exclusivamente en el
          Usuario y terceros voluntarios que, de manera espontánea, decidan apoyar en la causa.
          <br />
          <br />
          El Usuario que accede a la plataforma puede crear una alerta digital sobre la pérdida
          de su mascota, incluyendo detalles clave como el nombre del animal, especie, raza,
          descripción física, última ubicación conocida, información de contacto y fotografías
          recientes. Esta información es utilizada para generar una pauta digital automatizada y
          georreferenciada, la cual será publicada en redes sociales con el fin de aumentar el
          alcance comunitario y acelerar la posibilidad de reencuentro.
          <br />
          <br />
          La veracidad, exactitud y vigencia de la información publicada son responsabilidad
          exclusiva del Usuario. Bangk y Finders.Pet se reservan el derecho de suspender o
          eliminar cualquier contenido que se considere falso, ofensivo, fraudulento, engañoso o
          contrario a la legislación vigente o a estos términos y condiciones. Asimismo, en caso
          de detectar uso indebido del sistema con fines distintos a los previstos, las plataformas
          podrán restringir el acceso del Usuario infractor.
          <br />
          <br />
          Es importante tener en cuenta que la efectividad del servicio depende de factores
          externos como la colaboración ciudadana, la viralización del contenido en redes
          sociales, la disponibilidad de dispositivos móviles con acceso a geolocalización, y la
          rapidez con la que se actúe después de reportar la pérdida. Por tanto, el servicio no
          puede ofrecer ni garantizar resultados específicos sobre la recuperación de la mascota.
          <br />
          <br />
          Finalmente, el acceso y uso de la plataforma implican la aceptación expresa por parte
          del Usuario de estos Términos y Condiciones, así como de las políticas de privacidad y
          tratamiento de datos personales. El uso adecuado del servicio, dentro de los
          parámetros establecidos, será clave para obtener el mayor provecho de esta
          herramienta diseñada para apoyar a la comunidad en la protección de sus animales de
          compañía.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          2. Funcionamiento del servicio
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          El servicio de búsqueda de mascotas prestado a través de la plataforma digital de
          Bangk (www.bang.co/pet-bangk/) tiene como finalidad apoyar al USUARIO en la
          difusión de una alerta pública digital sobre la pérdida de su mascota, ya sea perro o
          gato, con el objetivo de aumentar las posibilidades de ubicación mediante redes
          sociales y herramientas de geolocalización digital.
          <br />
          <br />
          El proceso comienza cuando el USUARIO accede a la sección “Buscamos tu Mascota” y
          elige uno de los tres paquetes de servicio disponibles, cada uno con diferentes alcances
          en tiempo de exposición, radio geográfico y nivel de difusión. Una vez seleccionado el
          paquete, el USUARIO diligencia un formulario digital con información relevante de la
          mascota extraviada: nombre, raza, color, edad, descripción de señales particulares,
          datos de contacto, y fotografía reciente de la mascota.
          <br />
          <br />
          Posteriormente, el USUARIO debe geolocalizar manualmente en un mapa interactivo el
          lugar exacto o aproximado donde se perdió la mascota. De igual forma, el USUARIO
          podrá seleccionar el radio de búsqueda (en kilómetros) y el tiempo estimado por el cual
          desea que su anuncio permanezca activo. Esta información es fundamental para
          parametrizar correctamente la pauta digital automatizada que se activará en
          plataformas como Facebook e Instagram.
          <br />
          <br />
          Una vez completado el formulario, el USUARIO procederá al pago mediante la pasarela
          de pagos segura habilitada por Bangk (actualmente Wompi), donde podrá realizar la
          transacción con tarjeta débito, crédito u otros métodos de pago habilitados. Solo una
          vez confirmado el pago, se iniciará la programación del servicio.
          <br />
          <br />
          El anuncio digital de la mascota perdida será creado y publicado utilizando una pauta
          previamente configurada por Bangk, que opera bajo el modelo de segmentación por
          georreferencia. Es decir, personas que residan o transiten dentro del área seleccionada
          por el USUARIO podrán visualizar el aviso y, si tienen información útil, podrán hacer clic
          en un botón que los direcciona directamente a un canal de WhatsApp, donde podrán
          comunicarse para reportar el avistamiento o hallazgo de la mascota.
          <br />
          <br />
          Este modelo de servicio no realiza rastreo físico, ni promueve operativos de búsqueda,
          sino que utiliza el alcance y la interacción de redes sociales para fomentar la
          participación ciudadana y aumentar las probabilidades de reencuentro entre el dueño
          y su mascota extraviada.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          3. Limitación de Responsabilidad
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          El USUARIO entiende y acepta que la función principal de FINDERS.PET es facilitar la
          difusión de alertas digitales respecto a mascotas perdidas, a través de herramientas
          tecnológicas como la geolocalización, publicidad en redes sociales y la creación de
          piezas visuales informativas. Sin embargo, esta herramienta no constituye ni reemplaza
          servicios especializados en búsqueda, rescate, atención veterinaria o intervención
          directa sobre el terreno.
          <br />
          <br />
          FINDERS.PET no garantiza, expresa ni implícitamente, la localización, recuperación o
          rescate exitoso de la mascota extraviada. La efectividad del servicio está sujeta a
          múltiples variables externas que no están bajo control de la plataforma, tales como la
          respuesta del entorno social, el alcance orgánico o pago de las publicaciones, la
          precisión de la información proporcionada por el USUARIO y la participación de terceros
          en la red de apoyo ciudadana.
          <br />
          <br />
          Asimismo, FINDERS.PET no asume responsabilidad por las pérdidas económicas,
          patrimoniales, emocionales o de otro tipo que el USUARIO pueda experimentar durante
          o después del uso del servicio. Esto incluye, pero no se limita, al costo del servicio
          contratado, gastos asociados al bienestar del animal, angustia emocional, o frustración
          por expectativas no cumplidas.
          <br />
          <br />
          La plataforma no puede garantizar la veracidad, integridad o exactitud de los datos
          proporcionados por otros usuarios, ni puede controlar la conducta de terceros que
          accedan a la información publicada. En consecuencia, el USUARIO libera a FINDERS.PET
          y a sus representantes de toda reclamación o responsabilidad derivada de
          interacciones con terceros que hayan sido motivadas por la información difundida en
          la plataforma.
          <br />
          <br />
          Cualquier uso indebido de la información, apropiación no autorizada de contenido,
          acoso, o actos fraudulentos llevados a cabo por terceros tras la visualización de
          publicaciones en la plataforma, serán responsabilidad única del autor de dichos actos,
          exonerando completamente a FINDERS.PET y a su red de distribución digital.
          <br />
          <br />
          El USUARIO acepta que, al tratarse de un servicio de intermediación tecnológica de
          carácter informativo, la plataforma actúa como un canal de visibilidad y no como una
          entidad garante de resultados. Por lo tanto, los pagos realizados corresponden
          exclusivamente al uso de los servicios publicitarios ofrecidos y no a una promesa de
          recuperación de la mascota.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          4. Prohibiciones y Declaración de Legalidad de Fondos
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          El USUARIO se compromete a utilizar el servicio ofrecido a través de la plataforma
          únicamente para fines lícitos, de conformidad con los presentes Términos y Condiciones
          y la legislación vigente en Colombia. En este sentido, queda expresamente prohibido:
          <br />
          <br />
          1. Utilizar la plataforma para actividades que puedan ser consideradas ilícitas,
          fraudulentas o que violen derechos de terceros, incluyendo la suplantación de
          identidad, publicación de información falsa o uso de datos sin autorización.
          <br />
          <br />
          2. Realizar transacciones que no se ajusten a las condiciones del servicio o que
          contravengan las normas legales y reglamentarias aplicables al comercio
          electrónico y la protección al consumidor.
          <br />
          <br />
          3. Usar la plataforma como medio para el lavado de activos, financiación del
          terrorismo u otras conductas delictivas, según lo definido en el Código Penal
          Colombiano o en tratados internacionales suscritos por el país.
          <br />
          <br />
          El USUARIO, bajo la gravedad del juramento, declara que:
          <br />
          <br />
          • Sus ingresos provienen de actividades lícitas.
          <br />
          <br />
          • No se encuentra incluido en listas restrictivas nacionales o internacionales como
          la OFAC (Office of Foreign Assets Control) u otras equivalentes.
          <br />
          <br />
          • No tiene vínculos con organizaciones o personas relacionadas con lavado de
          activos, financiamiento del terrorismo, trata de personas o actividades ilícitas de
          cualquier índole.
          <br />
          <br />
          FINDERS.PET y BANGK se reservan el derecho de suspender, cancelar o rechazar de
          manera unilateral cualquier cuenta, transacción o acceso a los servicios ofrecidos si se
          detectan indicios o sospechas razonables de actividades irregulares o ilegales, sin que
          ello genere indemnización o responsabilidad alguna a favor del USUARIO.
          <br />
          <br />
          Asimismo, el USUARIO se compromete a actualizar su información personal, financiera y
          de contacto al menos una vez al año, o cuando le sea requerido por la plataforma,
          como parte del cumplimiento del régimen de prevención de lavado de activos y
          financiamiento del terrorismo (SARLAFT).
          <br />
          <br />
          BANGK podrá realizar cambios y mejoras en el software para optimizar su seguridad y
          funcionamiento, ajustar funciones o características, y cumplir con requisitos legales o
          prevenir actividades ilegales o usos no autorizados. BANGK informará al USUARIO con
          antelación suficiente sobre cualquier cambio sustancial que pueda afectar el uso del
          software, a través de correo electrónico u otros medios adecuados. Sin embargo, en
          ocasiones se realizarán actualizaciones sin previo aviso para garantizar la seguridad y
          el correcto funcionamiento del servicio.
          <br />
          <br />
          El USUARIO se obliga a utilizar el software de manera ética y conforme a las leyes
          aplicables, estando prohibido su uso para actividades ilegales, inmorales o que violen
          los derechos de terceros. BANGK se reserva el derecho de suspender o cancelar el
          acceso al software en caso de violación de estas condiciones, sin perjuicio de las
          acciones legales correspondientes.
          <br />
          <br />
          El contenido generado, almacenado o transmitido a través del software es
          responsabilidad exclusiva del USUARIO. BANGK no asume responsabilidad por la
          exactitud, legalidad o idoneidad del contenido. El USUARIO se compromete a no cargar,
          compartir o transmitir contenido que infrinja derechos de propiedad intelectual, sea
          difamatorio o constituya un riesgo para la seguridad del sistema.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          5. Modificación del Servicio
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          BANGK se reserva el derecho de modificar, actualizar o suspender total o parcialmente
          el servicio en cualquier momento, incluyendo la introducción de nuevos términos o
          condiciones sobre su uso. Dichas modificaciones serán informadas a los usuarios a
          través de los canales disponibles, salvo en situaciones excepcionales en las que no sea
          razonable hacerlo, como en casos de fuerza mayor, cumplimiento de requerimientos
          legales, eventos de seguridad, integridad técnica del servicio, protección de otros
          usuarios o hechos fuera del control razonable de BANGK, como desastres naturales,
          conflictos armados o decisiones gubernamentales inesperadas. La continuación en el
          uso del servicio después de efectuadas dichas modificaciones se entenderá como
          aceptación expresa de los nuevos términos.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          6. Derechos sobre el Software
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          El software que permite la operación del servicio “Buscamos tu Mascota” y la
          plataforma FINDERS.PET es de propiedad exclusiva de JT ADS PERFORMANCE LLC,
          sociedad registrada en los Estados Unidos de América, titular de todos los derechos de
          propiedad intelectual sobre el sistema, sus desarrollos, algoritmos, interfaces,
          funcionalidades, bases de datos y contenido asociado. El USUARIO no adquiere ningún
          derecho de propiedad sobre el software, limitándose su uso a lo estrictamente
          necesario para la utilización del servicio según lo descrito en los presentes Términos y
          Condiciones.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          7. Garantía
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          BANGK y Finders.Pet se esfuerzan por ofrecer un servicio funcional, seguro y de alta
          disponibilidad. No obstante, el USUARIO acepta que el software y los servicios se
          prestan “tal cual están”, sin garantías expresas o implícitas de comerciabilidad o
          idoneidad para un propósito específico. BANGK garantiza únicamente la atención y
          corrección de errores técnicos propios del sistema, siempre que estos no se deriven del
          mal uso del software, fallas en la red del USUARIO o intervenciones no autorizadas.
          <br />
          <br />
          El USUARIO deberá informar inmediatamente cualquier error detectado al correo
          electrónico soporte@bangk.co, detallando el entorno operativo, capturas de pantalla,
          descripción del problema y condiciones de uso al momento del error. Esta información
          será esencial para que el equipo técnico pueda identificar, reproducir y corregir la falla.
          <br />
          <br />
          Esta garantía no aplica en los siguientes casos:
          <br />
          <br />
          • Uso del software en condiciones distintas a las previstas en estos Términos.
          <br />
          <br />
          • Modificaciones no autorizadas por parte del USUARIO o terceros.
          <br />
          <br />
          • Fallos derivados de servidores externos ajenos al control directo de BANGK o
          Finders.Pet.
          <br />
          <br />
          En caso de presentarse interrupciones por causas externas, BANGK hará todo lo posible
          por restablecer el servicio en un tiempo razonable, proporcional al nivel de afectación,
          sin que ello implique reconocimiento de indemnización o responsabilidad adicional.
        </Text>
      </Col>
    </Wrapper>
  );
};

export default LookingPetConditions;