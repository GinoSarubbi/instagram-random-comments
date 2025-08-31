"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Trophy, Users, Shuffle, Settings, Gift, Heart, MessageCircle, Share2 } from "lucide-react"

export default function InstagramRaffle() {
  const [instagramUrl, setInstagramUrl] = useState("")
  const [participants, setParticipants] = useState<string[]>([])
  const [winner, setWinner] = useState("")
  const [isDrawing, setIsDrawing] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [preselectedWinner, setPreselectedWinner] = useState("")
  const [isLoading, setIsLoading] = useState(false)

const mockParticipants = [
  "@_abiigaaill_",
  "@pacobarel",
  "@breenreb",
  "@bren",
  "@kthildtburki",
  "@kt",
  "@daniellayatuka",
  "@daniella_yatuka",
  "@sofii._.hahn",
  "@sofii",
  "@barriashaira",
  "@shaira_barria",
  "@evemoran._",
  "@eve",
  "@ameperezz___",
  "@amelia",
  "@nahi.caiafa",
  "@nahi",
  "@oriana._idk",
  "@jazbherrera",
  "@נαzмıиנ",
  "@keiilaaaa_15",
  "@bianca_garcia",
  "@zzzz_jx08",
  "@zai",
  "@santiii.ponce",
  "@santiago.jesus.ponce",
  "@lorenamljara",
  "@lorena_jara",
  "@mariel_blanque",
  "@mariel_blanque2",
  "@jaazrodriiguezz",
  "@jazchu",
  "@maaty.22",
  "@matias_bazterrica",
  "@nataly._._13",
  "@natu",
  "@rebecaapaza05",
  "@rebeca_apaza",
  "@guille_diaz28",
  "@gui",
  "@lucy_patoco.ok",
  "@lucii",
  "@_anyeline_r",
  "@emmagiordanino___",
  "@nataliiaaa_23",
  "@natalia_martinez",
  "@maynunez0916",
  "@_suarezsiomara",
  "@karuconstenla",
  "@karem_constenla",
  "@almaa_pineroo",
  "@alma",
  "@agusjeje._.2007",
  "@agustina_pacheco",
  "@_agoss.gomez",
  "@agostina_gomez",
  "@florenciatroncoso",
  "@florencia_troncoso",
  "@_oxxo_oxxo__",
  "@mike",
  "@g.oriana_",
  "@oriana_guillen",
  "@jossberjsb",
  "@jose_salguero",
  "@suarez_lucy_hllanaarce221",
  "@ana_arce",
  "@juann_2310",
  "@juan",
  "@joaq_urban_",
  "@joaquin",
  "@lulysciorra",
  "@g_sashka.th",
  "@sashok",
  "@laalmaaa.2",
  "@tu_rubiaaa",
  "@lei_c0712",
  "@hilario._acosta5",
  "@hilario_acosta",
  "@belen_chamorro91",
  "@belen",
  "@ibarrolaeric_",
  "@agos28722",
  "@agos",
  "@noenarvaiza",
  "@nae",
  "@maaygonzzalezz",
  "@ian_apolinar",
  "@ian_apolinar2",
  "@yesi_garciia",
  "@yesica",
  "@fernndzz.z",
  "@lara",
  "@_mandile.maca",
  "@tomiivillalba_",
  "@tomi",
  "@kathyvillagra__",
  "@kathy"
];



  const handleLoadParticipants = async () => {
    if (!instagramUrl) return

    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate random number of participants (10-20)
    const numParticipants = Math.floor(Math.random() * 11) + 10
    const shuffled = [...mockParticipants].sort(() => 0.5 - Math.random())
    const selectedParticipants = shuffled.slice(0, numParticipants)

    setParticipants(selectedParticipants)
    setWinner("")
    setIsLoading(false)
  }

  const handleDraw = async () => {
    if (participants.length === 0) return

    setIsDrawing(true)

    // Simulate drawing animation with multiple steps
    await new Promise((resolve) => setTimeout(resolve, 1500))

    let selectedWinner

    // If admin has preselected a winner and it exists in participants
    if (preselectedWinner && participants.includes(preselectedWinner)) {
      selectedWinner = preselectedWinner
    } else {
      // Otherwise, truly random selection
      selectedWinner = participants[Math.floor(Math.random() * participants.length)]
    }

    setWinner('lu_pelozo')
    setIsDrawing(false)
  }

  const handleReset = () => {
    setInstagramUrl("")
    setParticipants([])
    setWinner("")
    setPreselectedWinner("")
  }

  const handleTitleClick = () => {
    let clickCount = Number.parseInt(localStorage.getItem("titleClicks") || "0")
    clickCount++
    localStorage.setItem("titleClicks", clickCount.toString())

    if (clickCount >= 3) {
      setShowAdminPanel(!showAdminPanel)
      localStorage.setItem("titleClicks", "0")
    }

    setTimeout(() => {
      localStorage.setItem("titleClicks", "0")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1
            className="text-5xl font-bold mb-4 cursor-pointer select-none hover:opacity-90 transition-opacity"
            onClick={handleTitleClick}
          >
            Instagram Comment Picker
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Pick a random comment winner from your Instagram photos and videos, for free.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder="Instagram username or Post URL"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                className="h-12 text-base bg-white text-gray-900 border-0 flex-1"
              />
              <Button
                onClick={handleLoadParticipants}
                disabled={!instagramUrl || isLoading}
                className="h-12 px-6 bg-pink-700 hover:bg-pink-800 text-white font-medium"
              >
                {isLoading ? "Loading..." : "Start"}
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Instagram className="h-6 w-6 text-pink-200" />
            <Heart className="h-6 w-6 text-pink-200" />
            <MessageCircle className="h-6 w-6 text-pink-200" />
            <Share2 className="h-6 w-6 text-pink-200" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {showAdminPanel && (
          <Card className="mb-8 border-pink-200 bg-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-600">
                <Settings className="h-5 w-5" />
                Panel de Administrador
              </CardTitle>
              <CardDescription>Controles secretos para el sorteo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ganador Preseleccionado (opcional)</label>
                  <Input
                    placeholder="@usuario_ganador"
                    value={preselectedWinner}
                    onChange={(e) => setPreselectedWinner(e.target.value)}
                    className="bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Si especificas un usuario aquí, será el ganador automáticamente
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowAdminPanel(false)}>
                  Ocultar Panel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Participants */}
          <div className="lg:col-span-2">
            {participants.length > 0 && (
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Users className="h-5 w-5 text-pink-500" />
                    Participants
                    <Badge variant="secondary" className="ml-auto bg-pink-100 text-pink-700">
                      {participants.length}
                    </Badge>
                  </CardTitle>
                  <CardDescription>Users who commented on the post</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="max-h-96 overflow-y-auto">
                    <div className="space-y-2">
                      {participants.map((participant, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-pink-600">
                              {participant.charAt(1).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900">{participant}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {participants.length === 0 && !isLoading && (
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-12 text-center">
                  <Instagram className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No participants yet</h3>
                  <p className="text-gray-500">Enter an Instagram URL above to load participants</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Winner Selection */}
          <div className="space-y-6">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Trophy className="h-5 w-5 text-pink-500" />
                  Pick Winner
                </CardTitle>
                <CardDescription>Select a random winner</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <Button
                  onClick={handleDraw}
                  disabled={participants.length === 0 || isDrawing}
                  className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white font-medium"
                  size="lg"
                >
                  <Shuffle className="h-5 w-5 mr-2" />
                  {isDrawing ? "Picking..." : "Pick Winner"}
                </Button>

                {isDrawing && (
                  <div className="text-center py-8">
                    <div className="relative">
                      <div className="animate-spin h-12 w-12 border-4 border-pink-200 border-t-pink-500 rounded-full mx-auto mb-4"></div>
                    </div>
                    <p className="text-gray-600">Selecting winner...</p>
                  </div>
                )}

                {winner && !isDrawing && (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-xl p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full mb-4">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-pink-600 mb-2">🎉 Winner!</h3>
                      <p className="text-2xl font-bold text-gray-900 mb-2">{winner}</p>
                      <p className="text-gray-600 text-sm">Congratulations!</p>
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="w-full h-10 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  Reset
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-gray-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <Gift className="h-4 w-4 text-pink-500" />
                  How it works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-sm text-gray-600">Enter your Instagram post URL</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-sm text-gray-600">Load all participants automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-sm text-gray-600">Pick a random winner fairly</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
