import os
import anthropic
from ..schemas.ai import AIAnalysisRequest, AIBusinessPlanRequest, AIReportRequest

_SYSTEM = (
    "Vous êtes JuntoX AI, un assistant stratégique spécialisé pour les entreprises africaines. "
    "Répondez toujours en français, de façon structurée, professionnelle et directement actionnable. "
    "Tenez compte du contexte africain — RDC, contraintes terrain, réalités économiques locales."
)

_HAIKU = 'claude-haiku-4-5-20251001'
_SONNET = 'claude-sonnet-4-6'


class JuntoXAIService:
    def __init__(self) -> None:
        api_key = os.getenv('ANTHROPIC_API_KEY')
        self.client = anthropic.Anthropic(api_key=api_key) if api_key else None

    def is_configured(self) -> bool:
        return self.client is not None

    def _call(self, prompt: str, model: str = _HAIKU, max_tokens: int = 1024) -> str:
        if not self.client:
            raise RuntimeError(
                'ANTHROPIC_API_KEY non configurée. '
                'Ajoutez-la dans les variables d\'environnement Railway.'
            )
        message = self.client.messages.create(
            model=model,
            max_tokens=max_tokens,
            system=_SYSTEM,
            messages=[{'role': 'user', 'content': prompt}],
        )
        return message.content[0].text.strip()

    def analyze_project(self, request: AIAnalysisRequest) -> str:
        prompt = (
            f"Analyse ce projet : **{request.name}**\n\n"
            f"Description : {request.description}\n\n"
            f"Objectif stratégique : {request.objective}\n\n"
            "Structure ta réponse en 3 sections :\n"
            "1. **Forces** — atouts clés du projet\n"
            "2. **Risques** — points de vigilance prioritaires\n"
            "3. **Recommandations** — 3 actions concrètes à mettre en œuvre"
        )
        return self._call(prompt, model=_HAIKU, max_tokens=1200)

    def generate_business_plan(self, request: AIBusinessPlanRequest) -> str:
        prompt = (
            f"Génère un business plan structuré pour **{request.company_name}**.\n\n"
            f"Résumé de l'activité : {request.summary}\n"
            f"Public cible : {request.target_audience}\n\n"
            "Inclus les sections suivantes :\n"
            "1. Résumé exécutif\n"
            "2. Proposition de valeur\n"
            "3. Analyse de marché et concurrence\n"
            "4. Modèle de revenus\n"
            "5. Besoins de financement\n"
            "6. Plan d'action 90 jours"
        )
        return self._call(prompt, model=_SONNET, max_tokens=2000)

    def generate_report(self, request: AIReportRequest) -> str:
        prompt = (
            f"Rédige un rapport professionnel sur : **{request.topic}**\n\n"
            f"Contexte : {request.context}\n"
            f"Objectif du rapport : {request.goal}\n\n"
            "Structure le rapport en sections claires avec une conclusion et des recommandations concrètes."
        )
        return self._call(prompt, model=_HAIKU, max_tokens=1500)
