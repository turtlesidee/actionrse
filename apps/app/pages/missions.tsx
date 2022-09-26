import MainLayout from "../components/mainLayout/mainLayout";
import {Company} from "../components/missions/company/company";
import Follower from "../components/missions/follower/follower";
import {Page, useCore} from "../hooks/useCore";
import {Gouvernance} from "../components/missions/gouvernance/gouvernance";
import {Strategy} from "../components/missions/strategy/strategy";
import {Inventory} from "../components/missions/inventory/inventory";
import {ResultInventory} from "../components/missions/inventory/resultInventory";

/**
 *           <p> Les droits de l’homme</p>
 *           <p> Les relations et les conditions de travail</p>
 *         <p>L’environnement</p>
 *         <p> Loyauté des pratiques</p>
 *         <p> Les questions relatives aux consommateurs</p>
 *         <p>Les communautés et le développement local</p>
 *         <p> Identifier les parties prenantes</p>

 */
export default function Mission() {
  const core = useCore();
  return <MainLayout>
    <div className="w-full flex">
      <div className="w-1/6">
        <Follower current={core.page} />
      </div>
      <div className="w-5/6 ml-12 mr-12">

        {core.page === Page.CREATION_COMPAGNIE ? <Company nextPage={() => core.changePage(Page.MOTIVATION)} /> : null}
        {core.page === Page.MOTIVATION ? <Gouvernance nextPage={() => core.changePage(Page.STRATEGY)} /> : null }
        {core.page === Page.STRATEGY ? <Strategy nextPage={() => core.changePage(Page.LIEU)} /> : null}
        {core.page === Page.LIEU ? <Inventory nextPage={() => core.changePage(Page.RESULT_INVENTORY)} /> : null}
        {core.page === Page.RESULT_INVENTORY ? <ResultInventory nextPage={() => core.changePage(Page.IDENTIFICATION)} /> : null}

      </div>

    </div>

  </MainLayout>
}
