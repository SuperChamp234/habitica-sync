import * as React from "react";
import { useForm } from "react-hook-form";
import { Trans,useTranslation } from 'react-i18next'

export default function Index(props: any) {

    const display = <div id="addDisplay">
                        <form>
                            <label><Trans>type</Trans>
                                <select>
                                <option value="Daily">Daily</option>
                                <option value="Habit">Habit</option>
                                <option value="Todo">Todo</option>
                                <option value="Reward">Reward</option>
                                </select>
                            </label>               
                            <label><Trans>title</Trans>
                                <input type="text" />
                            </label>
                            <label><Trans>notes</Trans>
                                <input type="text" />
                            </label>
                        </form>
                    </div>

    return (display);
}